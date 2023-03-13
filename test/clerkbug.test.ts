import {clerkClient} from "@clerk/clerk-sdk-node";

it("Test clerk authentication", async() => {
    await clerkClient.clients.getClient("")
})