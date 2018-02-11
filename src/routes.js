import Handlers from './handlers';

import {
  SchoolModel,
  SchoolModelRequired
} from './db/model';

const routes = [
  {
    method: 'GET',
    path: '/schools',
    handler: Handlers.getAllSchools
  },
  {
    method: 'GET',
    path: '/schools/{schoolId}',
    handler: Handlers.getSchool
  },
  {
    method: 'POST',
    path: '/schools',
    handler: Handlers.createSchool,
    config: {
      validate: {
        payload: SchoolModelRequired
      }
    }
  },
  {
    method: 'PUT',
    path: '/schools/{schoolId}',
    handler: Handlers.putSchool,
    config: {
      validate: {
        payload: SchoolModelRequired
      }
    }
  },
  {
    method: 'PATCH',
    path: '/schools/{schoolId}',
    handler: Handlers.patchSchool,
    config: {
      validate: {
        payload: SchoolModel
      }
    }
  },
  {
    method: 'DELETE',
    path: '/schools/{schoolId}',
    handler: Handlers.deleteSchool
  }
];

export default routes;
