import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export type EncounterBase = {
  name: string;
  img: string;
}

export type EncounterNotDefeated = {
  defeated: false;
} & EncounterBase;

export type EncounterPugs = {
  tanks?: number;
  healers?: number;
  dps?: number;
}

export type EncounterParticipant = {
  name: string;
  class: GameClass;
  spec: PlayerSpec;
  role: RaidRole;
}

export type EncounterParticipants = EncounterParticipant[];

export type EncounterDefeated = {
  defeated: true;
  pugs?: EncounterPugs;
  warcraftLogsLink: string | null;
  datetime: string | null;
  participants: EncounterParticipants | null;
} & EncounterBase;

export type Encounter = EncounterDefeated | EncounterNotDefeated;
