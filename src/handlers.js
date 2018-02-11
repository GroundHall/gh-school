import Boom from 'boom';
import dateformat from 'dateformat';
import env from './env.config';
import r from './db/config';
import {
  ReplyPromiseResponse
} from './decorators';

class Handlers {
  @ReplyPromiseResponse
  static getAllSchools(request) {
    return r.table(env.DB_TABLE_NAME)
  }

  @ReplyPromiseResponse
  static getSchool(request) {
    const { schoolId } = request.params;
    return r.table(env.DB_TABLE_NAME).get(schoolId);
  }

  @ReplyPromiseResponse
  static createSchool(request) {
    const { payload } = request;
    return r.table(env.DB_TABLE_NAME).insert(
      r.expr(payload).merge({
        createdAt: r.now()
      }),
      // This tells rethinkdb that changes should be return
      {returnChanges: true}
    )
  }

  @ReplyPromiseResponse
  static putSchool(request) {
    const { schoolId } = request.params;
    const { payload } = request;
    payload.id = schoolId;
    return r.table(env.DB_TABLE_NAME)
    .get(schoolId)
    .replace(payload, {returnChanges: true})
  }

  @ReplyPromiseResponse
  static patchSchool(request) {
    const { schoolId } = request.params;
    const { payload } = request;
    payload.id = schoolId;
    return r.table(env.DB_TABLE_NAME)
    .get(schoolId)
    .update(payload, {returnChanges: true})
  }

  @ReplyPromiseResponse
  static deleteSchool(request) {
    const { schoolId } = request.params;
    return r.table(env.DB_TABLE_NAME)
      .get(schoolId)
      .delete({returnChanges: true})
  }
}

export default Handlers;
