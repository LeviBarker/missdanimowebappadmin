import {
  Timestamp
} from "@angular/fire/firestore";

export interface Project {
  title?: string;
  thumbnail_url?: string;
  supplies?: any[];
  steps?: any[];
  published?: boolean;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

