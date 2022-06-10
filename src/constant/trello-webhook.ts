import {getHTTPPath} from "../api/manifest"
import {TrelloApiUrlParams} from "../types";
import {Routes} from "./routes";

export const TrelloTranslationKeys = {
   CardMoved: 'action_move_card_from_list_to_list',
   CardCreated: 'action_create_card'
}

export const TrelloAPIWebhook = (params: TrelloApiUrlParams) => {
   return `${getHTTPPath()}${Routes.App.CallReceiveNotification}/context_${params.context}/secret_${params.secret}/model_${params.idModel}/channel_${params.channel}`;
}
