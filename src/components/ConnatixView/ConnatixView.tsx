import React from "react";
import ConnatixViewUtils from './ConnatixView.utils';
import {ConnatixConfig, embeddedUrl} from './ConnatixView.config';

class ConnatixView extends React.Component<ConnatixConfig> {
    private connatixViewUtils: ConnatixViewUtils;

    constructor(props: ConnatixConfig) {
        super(props);
        this.connatixViewUtils = new ConnatixViewUtils(this.props.config.handler, window);
        this.connatixViewUtils.init();
    }

    private hasToken(): boolean {
        return this.props.config.token.length > 100;
    }

    public componentWillUnmount(): void {
        this.connatixViewUtils.destroy()
    }

    public render() {
        return (
            this.hasToken() ?
                <iframe style={{
                    "width": "100%", "height": "100vh"
                }} src={this.getUrl()}></iframe>
                :
                <div style={{
                    "width": "100%", "height": "100vh", "color": "red"
                }}>Please provide the Connatix Token</div>
        );
    }

    private getUrl(): string {
        return embeddedUrl.concat(this.props.config.token)
    }
}

export default ConnatixView;
