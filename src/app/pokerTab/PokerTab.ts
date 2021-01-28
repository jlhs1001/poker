import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/pokerTab/index.html")
@PreventIframe("/pokerTab/config.html")
@PreventIframe("/pokerTab/remove.html")
export class PokerTab {
}
