import type { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant, LovelaceCardConfig, computeEntityColor } from "./ha";
import {
  ExtraItem,
  GroupItem,
  DomainItem,
  DeviceClassItem,
  Ruleset,
} from "./ha/types";
import {
  getCustomIcon,
  getCustomName,
  getCustomColor,
  getCustomCSS,
  getBackgroundColor,
  getResolvedCustomizationValue,
} from "./card-styles";

export const getPersonEntityIds = (
  entities: HomeAssistant["entities"],
  hiddenEntities: string[],
  hiddenLabels: string[],
  hide_person: boolean
): string[] => {
  if (hide_person) return [];
  return Object.values(entities)
    .filter(
      (entity) =>
        entity.entity_id.startsWith("person.") &&
        !hiddenEntities.includes(entity.entity_id) &&
        !entity.labels?.some((l) => hiddenLabels.includes(l)) &&
        !entity.hidden
    )
    .map((entry) => entry.entity_id)
    .reverse();
};

export const mapPersonIdsToStates = (
  ids: string[],
  hassStates: HomeAssistant["states"]
): HassEntity[] => {
  return ids
    .map((id) => hassStates[id])
    .filter((stateObj): stateObj is HassEntity => !!stateObj);
};

export const computePersonItems = (
  entities: HomeAssistant["entities"],
  hiddenEntities: string[],
  hiddenLabels: string[],
  hide_person: boolean,
  hassStates: HomeAssistant["states"]
): HassEntity[] => {
  const ids = getPersonEntityIds(
    entities,
    hiddenEntities,
    hiddenLabels,
    hide_person
  );
  return mapPersonIdsToStates(ids, hassStates);
};

export const computeExtraItems = (
  cfg: LovelaceCardConfig,
  states: { [entity_id: string]: HassEntity },
  customizationMap?: Map<string, LovelaceCardConfig>
): ExtraItem[] => {
  const content = cfg.content || [];
  if (!cfg.extra_entities) return [];

  return (cfg.extra_entities as string[])
    .reduce<ExtraItem[]>((acc: ExtraItem[], eid: string) => {
      if (!content.includes(eid)) return acc;

      const entity: HassEntity | undefined = states[eid];
      if (!entity) return acc;
      const cust: LovelaceCardConfig | undefined = cfg.customization?.find(
        (c: LovelaceCardConfig) => c.type === eid
      );
      if (cust && cust.state !== undefined && cust.invert_state !== undefined) {
        const inv: boolean = cust.invert_state === "true";
        const match: boolean = entity.state === cust.state;
        if ((!inv && !match) || (inv && match)) return acc;
      }

      const idx: number = content.indexOf(eid);
      const order: number = idx >= 0 ? idx : 0;

      let mappedColor: string | undefined = undefined;
      const rulesC = (cust as any)?.state_color_map;
      if (Array.isArray(rulesC) && rulesC.length > 0) {
        for (const rule of rulesC) {
          const target = rule.attribute === "state"
            ? entity.state
            : (entity.attributes as any)?.[rule.attribute];
          if (target !== undefined && String(target) === String(rule.equals)) {
            mappedColor = rule.color;
            break;
          }
        }
      }

      let climateIconColor: string | undefined = undefined;
      if (eid.startsWith("climate.")) {
        const hvacAction = (entity?.attributes as any)?.hvac_action;
        if (hvacAction === "heating") climateIconColor = "var(--state-climate-heat-color)";
        if (hvacAction === "cooling") climateIconColor = "var(--state-climate-cool-color)";
      }

      let mappedIcon: string | undefined = undefined;
      const rulesI = (cust as any)?.state_icon_map;
      if (Array.isArray(rulesI) && rulesI.length > 0) {
        for (const rule of rulesI) {
          const target = rule.attribute === "state"
            ? entity.state
            : (entity.attributes as any)?.[rule.attribute];
          if (target !== undefined && String(target) === String(rule.equals)) {
            mappedIcon = rule.icon;
            break;
          }
        }
      }

      const icon: string = mappedIcon || getCustomIcon(
        cfg,
        eid,
        undefined,
        entity,
        customizationMap
      );
      const name: string =
        getCustomName(cfg, eid, undefined, entity, customizationMap) ??
        entity.attributes.friendly_name ??
        eid;
      const color: string | undefined =
        mappedColor || climateIconColor ||
        getResolvedCustomizationValue(
          cfg,
          "icon_color",
          eid,
          undefined,
          customizationMap
        ) ||
        ((cust?.activate_state_color ?? cfg.activate_state_color)
          ? computeEntityColor(entity)
          : undefined) ||
        cfg.color;
      const icon_css: string | undefined = getCustomCSS(
        cfg,
        eid,
        undefined,
        customizationMap
      );
      const background_color: string | undefined = getBackgroundColor(
        cfg,
        eid,
        undefined,
        customizationMap
      );

      acc.push({
        type: "extra" as const,
        panel: eid,
        entity,
        order,
        icon,
        name,
        color,
        icon_css,
        background_color,
      });
      return acc;
    }, [])
    .sort((a: ExtraItem, b: ExtraItem) => a.order - b.order);
};

export const computeGroupItems = (
  content: string[],
  rulesets: Ruleset[]
): GroupItem[] =>
  content
    .map((id, idx) => {
      const ruleset = rulesets.find((g) => g.group_id === id);
      if (!ruleset) return undefined;
      const hasAttrs = Object.keys(ruleset).some(
        (key) =>
          key !== "group_id" &&
          key !== "group_icon" &&
          ruleset[key] !== undefined &&
          ruleset[key] !== ""
      );
      if (!hasAttrs) return undefined;
      return {
        type: "group" as const,
        group_id: id,
        order: idx,
        ruleset,
      };
    })
    .filter((g): g is GroupItem => !!g);

export const computeDomainItems = (content: string[]): DomainItem[] =>
  content
    .map((c, idx) =>
      !c.includes(" - ")
        ? ({
          type: "domain" as const,
          domain: c.trim().toLowerCase().replace(/\s+/g, "_"),
          order: idx,
        } as DomainItem)
        : null
    )
    .filter((v): v is DomainItem => v !== null);

export const computeDeviceClassItems = (content: string[]): DeviceClassItem[] =>
  content
    .map((c, idx) => {
      if (!c.includes(" - ")) return null;
      const [rawDomain, rawClass] = c.split(" - ");
      return {
        type: "deviceClass" as const,
        domain: rawDomain.trim().toLowerCase().replace(/\s+/g, "_"),
        deviceClass: rawClass.trim().toLowerCase(),
        order: idx,
      } as DeviceClassItem;
    })
    .filter((v): v is DeviceClassItem => v !== null);
