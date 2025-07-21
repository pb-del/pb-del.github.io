
export async function handler(event) {
    const { userID, consentUUID } = JSON.parse(event.body || '{}');

    // Mock linking - just return a fake linked response
    return {
        statusCode:200,
        body: JSON.stringify({
            message: "Linked consent to user",
            userId,
            consentUUID,
            timestampt: new Date().toISOString()
        })
    };
}