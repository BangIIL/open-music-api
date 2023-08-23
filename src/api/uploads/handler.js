const autoBind = require('auto-bind');

class UploadsHandler {
  constructor(service, validator) {
    this._service = service;
    this._valdator = validator;

    autoBind(this);
  }

  async postUploadCoverImageHandler(request, h) {
    const { cover } = request.payload;
    const { id } = request.params;
    this._valdator.validateImageHeaders(cover.hapi.headers);

    const filename = await this._service.writeFile(cover, cover.hapi);
    const coverUrl = `http://${process.env.HOST}:${process.env.PORT}/uploads/images/${filename}`;
    await this._service.addAlbumCover(coverUrl, id);

    const response = h.response({
      status: 'success',
      message: 'Sampul berhasil diunggah',
    });
    response.code(201);
    return response;
  }
}

module.exports = UploadsHandler;
