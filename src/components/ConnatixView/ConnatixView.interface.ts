export interface ConnatixViewInterface {
    /** Connatix auth token */
    token: string;
    /** Your handler for connatix data */
    handler: (connatixData: Record<string, any>) => void;
}
