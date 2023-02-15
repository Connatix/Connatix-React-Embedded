interface ConnatixViewInterface {
    /** Connatix bearer */
    token: string;
    /** Your handler for connatix data */
    handler: (connatixData: Record<string, any>) => void;
}

export default ConnatixViewInterface;
