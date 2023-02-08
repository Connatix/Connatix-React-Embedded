import React from "react";
import {ConnatixViewInterface} from './ConnatixView.interface';
import {ConnatixViewUtils} from './ConnatixView.utils';
import {embeddedUrl} from './ConnatixView.config';

class ConnatixViewComponent extends React.Component<ConnatixViewInterface> {
    private connatixViewUtils: ConnatixViewUtils;
    constructor(props: ConnatixViewInterface) {
        super(props);
        this.connatixViewUtils = new ConnatixViewUtils(this.props.handler, window);
        this.connatixViewUtils.init();
    }

    public componentWillUnmount(): void {
        this.connatixViewUtils.destroy()
    }

    public render() {
        return (
            <iframe src={this.getUrl()}></iframe>
        );
    }

    private getUrl(): string {
        return embeddedUrl.concat('extension&token=', this.props.token)
    }
}

export default ConnatixViewComponent;
