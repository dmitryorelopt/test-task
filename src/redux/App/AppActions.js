import { actionsCreator, payload } from "../../decorators/ActionDecorators";

@actionsCreator()
class AppActions {
  @payload()
  APP_INITIALIZE;
}

export const appActions = new AppActions();
