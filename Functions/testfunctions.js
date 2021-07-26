exports.handler = async (event, context) => {
    console.log("works");
    return { statusCode: 200, body: " Test " };
}
