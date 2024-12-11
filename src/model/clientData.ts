import { ActivityData } from "./activityData";

export interface ClientData {
    ip: string | undefined;
    userAgent: string | undefined;
    entryTime: number;
    exitTime?: number;
    userActivities: ActivityData[];
}