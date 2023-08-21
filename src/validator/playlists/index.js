const InvariantError = require('../../exceptions/InvariantError');
const { PlaylistPayloadSchema, SongInToPlaylistPayloadShema } = require('./schema');

const PlaylistValidator = {
  validatePlaylistPayload: (payload) => {
    const validationResult = PlaylistPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },

  validateSongInToPlaylistPayload: (payload) => {
    const validationResult = SongInToPlaylistPayloadShema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlaylistValidator;
