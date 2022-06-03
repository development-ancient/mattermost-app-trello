import { getHTTPPath, getManifestData } from "../api/manifest"
import { TrelloApiUrlParams } from "../types/trello";
import { Routes } from "./routes"; 
import queryString from "query-string";

export const TrelloTranslationKeys = {
   CardMoved: 'action_move_card_from_list_to_list',
   CardCreated: 'action_create_card'
}

export const TrelloAPIWebhook = (params: TrelloApiUrlParams) => {
   return `${getHTTPPath()}${Routes.App.CallReceiveNotification}/context${params.context}/secret${params.secret}/model${params.idModel}`;
}

export const TrelloImagePath = (siteURL: string) => {
   return `${siteURL}/plugins/com.mattermost.apps/apps/${getManifestData().app_id}/static/${getManifestData().icon}`
}