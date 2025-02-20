import { RPC, RPCMessageEvent } from 'rpc-shooter';
import {
  init,
  close,
  // message
  getMessage,
  getMultipleMessage,
  getSendingMessageList,
  getNormalMsgSeq,
  updateMessageTimeAndStatus,
  updateMessage,
  insertMessage,
  batchInsertMessageList,
  getMessageList,
  getMessageListNoTime,

  // conversation
  getAllConversationList,
  getAllConversationListToSync,
  getHiddenConversationList,
  getConversation,
  getMultipleConversation,
  updateColumnsConversation,
  decrConversationUnreadCount,
  batchInsertConversationList,
  insertConversation,
  getTotalUnreadMsgCount,

  // users
  getLoginUser,
  insertLoginUser,
  updateLoginUserByMap,

  // super group
  getJoinedSuperGroupList,
  getJoinedSuperGroupIDList,
  getSuperGroupInfoByGroupID,
  deleteSuperGroup,
  insertSuperGroup,
  updateSuperGroup,

  // unread messages
  deleteConversationUnreadMessageList,
  batchInsertConversationUnreadMessageList,

  // super group messages
  superGroupGetMessage,
  superGroupGetMultipleMessage,
  getSuperGroupNormalMsgSeq,
  superGroupGetNormalMinSeq,
  superGroupUpdateMessageTimeAndStatus,
  superGroupUpdateMessage,
  superGroupInsertMessage,
  superGroupBatchInsertMessageList,
  superGroupGetMessageListNoTime,
  superGroupGetMessageList,
} from '@/api/database';

import { getInstance } from './database/instance';

const ctx = self;
const rpc = new RPC({
  event: new RPCMessageEvent({
    currentEndpoint: ctx,
    targetEndpoint: ctx,
  }),
});

rpc.registerMethod('initDB', init);
rpc.registerMethod('close', close);

rpc.registerMethod('getMessage', getMessage);
rpc.registerMethod('getMultipleMessage', getMultipleMessage);
rpc.registerMethod('getSendingMessageList', getSendingMessageList);
rpc.registerMethod('getNormalMsgSeq', getNormalMsgSeq);
rpc.registerMethod('updateMessageTimeAndStatus', updateMessageTimeAndStatus);
rpc.registerMethod('updateMessage', updateMessage);
rpc.registerMethod('insertMessage', insertMessage);
rpc.registerMethod('batchInsertMessageList', batchInsertMessageList);
rpc.registerMethod(
  'superGroupGetMessageListNoTime',
  superGroupGetMessageListNoTime
);
rpc.registerMethod('getMessageList', getMessageList);
rpc.registerMethod('getMessageListNoTime', getMessageListNoTime);

rpc.registerMethod('getAllConversationList', getAllConversationList);
rpc.registerMethod(
  'getAllConversationListToSync',
  getAllConversationListToSync
);
rpc.registerMethod('getHiddenConversationList', getHiddenConversationList);
rpc.registerMethod('getConversation', getConversation);
rpc.registerMethod('getMultipleConversation', getMultipleConversation);
rpc.registerMethod('updateColumnsConversation', updateColumnsConversation);
rpc.registerMethod('decrConversationUnreadCount', decrConversationUnreadCount);
rpc.registerMethod('batchInsertConversationList', batchInsertConversationList);
rpc.registerMethod('getTotalUnreadMsgCount', getTotalUnreadMsgCount);
rpc.registerMethod('insertConversation', insertConversation);

rpc.registerMethod('getLoginUser', getLoginUser);
rpc.registerMethod('insertLoginUser', insertLoginUser);
rpc.registerMethod('updateLoginUserByMap', updateLoginUserByMap);

rpc.registerMethod('getJoinedSuperGroupList', getJoinedSuperGroupList);
rpc.registerMethod('getJoinedSuperGroupIDList', getJoinedSuperGroupIDList);
rpc.registerMethod('getSuperGroupInfoByGroupID', getSuperGroupInfoByGroupID);
rpc.registerMethod('deleteSuperGroup', deleteSuperGroup);
rpc.registerMethod('insertSuperGroup', insertSuperGroup);
rpc.registerMethod('updateSuperGroup', updateSuperGroup);

rpc.registerMethod(
  'deleteConversationUnreadMessageList',
  deleteConversationUnreadMessageList
);
rpc.registerMethod(
  'batchInsertConversationUnreadMessageList',
  batchInsertConversationUnreadMessageList
);

rpc.registerMethod('superGroupGetMessage', superGroupGetMessage);
rpc.registerMethod(
  'superGroupGetMultipleMessage',
  superGroupGetMultipleMessage
);
rpc.registerMethod('getSuperGroupNormalMsgSeq', getSuperGroupNormalMsgSeq);
rpc.registerMethod('superGroupGetNormalMinSeq', superGroupGetNormalMinSeq);

rpc.registerMethod(
  'superGroupUpdateMessageTimeAndStatus',
  superGroupUpdateMessageTimeAndStatus
);
rpc.registerMethod('superGroupUpdateMessage', superGroupUpdateMessage);
rpc.registerMethod('superGroupInsertMessage', superGroupInsertMessage);
rpc.registerMethod(
  'superGroupBatchInsertMessageList',
  superGroupBatchInsertMessageList
);
rpc.registerMethod('superGroupGetMessageList', superGroupGetMessageList);

rpc.registerMethod('exec', async (sql: string) => {
  const db = await getInstance();

  try {
    const result = db.exec(sql);

    console.info(`sql debug with exec sql = ${sql.trim()} , return `, result);
  } catch (error) {
    console.info(`sql debug with exec sql = ${sql} , return `, error);
  }
});
rpc.registerMethod('getRowsModified', async () => {
  const db = await getInstance();

  try {
    const result = db.getRowsModified();

    console.info('sql debug with getRowsModified return ', result);
  } catch (error) {
    console.info('sql debug with getRowsModified return ', error);
  }
});
