import { DetaAdapter } from "../../deps.ts";
import env from "../env.ts";

interface Verse {
  translation: string;
  book: number;
  chapter: number;
  verse: number;
  time: number;
}

export interface SessionData {
  settings: {
    defaultTranslation: string;
    markdownedVerse: boolean;
    versePerPage: number;
  };
  lastRead: Verse;
  bookmarks: Verse[];
}

export function initial(): SessionData {
  return {
    settings: {
      defaultTranslation: "kjv",
      markdownedVerse: true,
      versePerPage: 10,
    },
    lastRead: {
      translation: "kjv",
      book: 43,
      chapter: 3,
      verse: 16,
      time: Date.now(),
    },
    bookmarks: [],
  };
}

export const storage = new DetaAdapter({
  baseName: "session",
  projectKey: env.DETA_KEY,
});
