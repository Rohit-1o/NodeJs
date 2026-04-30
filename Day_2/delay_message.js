function delayMessage() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello World"), 2000);
    });
}
async function showMessage() {
    console.log("Waiting....");
    const message = await delayMessage();
    console.log(message); //"Hello World" (after 2 second)
}
showMessage();