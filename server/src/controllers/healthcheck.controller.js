import ApiResponse from '../utils/ApiResponse.js'
import ApiError from '../utils/ApiError.js'
import AsyncHandler from '../utils/AsyncHandler.js'

const healthcheck = AsyncHandler(
    async(req, res) => {
        res.status(200).json(new ApiResponse(200, null  ,"Health check successful."))
}
)

export default healthcheck;