const catchingErrorFromPromise = require('../../lib/catching-error-from-promise');

module.exports = (client) => (query = {}, data = {}, options = {new:true}) => {
    try {
        return catchingErrorFromPromise(client.findOneAndUpdate(query, { $pull: data }, options).exec());
    } catch (error) {
        return {error};
    }
};
