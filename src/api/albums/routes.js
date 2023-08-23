const routes = (handler) => [
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumByIdHandler,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.putAlbumByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumByIdHandler,
  },
  {
    method: 'POST',
    path: '/albums/{id}/likes',
    handler: handler.postAlbumLikesHanlder,
    options: {
      auth: 'openmusic_jwt',
    },
  },
  {
    method: 'get',
    path: '/albums/{id}/likes',
    handler: handler.getAlbumLikesHanlder,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}/likes',
    handler: handler.deleteAlbumLikesHanlder,
    options: {
      auth: 'openmusic_jwt',
    },
  },
];

module.exports = routes;
