import React from "react";
import bg from "/green-bg.jpg";

export default function About() {
    return (
        <div className="relative py-4" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="text-center text-4xl font-semibold pt-10 underline text-white">
                About Us
            </h1>
            <div className="max-w-4xl m-auto py-10 mt-10 px-12 border">
                <p className="text-gray-600 font-medium">
                    The spark for SwapShop ignited from our unwavering commitment to environmental conservation and the untapped potential of community engagement. Witnessing the alarming wastage of surplus items and the detrimental impact it had on our local environment, we envisioned a solution that would unite neighbors and amplify sustainability efforts. We felt a deep drive to establish a platform that harnesses the strength of local connections, enabling the exchange of items that would otherwise go to waste.
                </p>
                <br />
                <p className="text-gray-600 font-medium">
                    SwapShop is an innovative platform that redefines the approach to sustainable living by facilitating the exchange of surplus items within local communities. With a mission to prevent waste and promote a greener future, SwapShop provides a dynamic space where users can seamlessly share their excess belongings on the main feed page. This allows others in the community to discover and request items they need.
                </p>
                <br />
                <p className="text-gray-600 font-medium">
                    But SwapShop goes beyond being just a virtual marketplace. It nurtures the spirit of generosity and interconnectedness through its unique Demand Page. Here, users can express their needs and wishes, creating an open channel for anyone to donate the items they can spare. This collaborative exchange not only reduces waste but also fosters a sense of unity among community members.
                </p>
                <br />
                <p className="text-gray-600 font-medium">
                    Throughout our journey with SwapShop, we've gleaned invaluable lessons about the dynamics of fostering a community-driven platform centered around sustainability. We've come to appreciate the significance of striking a balance between convenience and environmental responsibility, ensuring that our platform is both user-friendly and impactful. The process has highlighted the importance of clear communication and transparent interactions to build trust among users.
                </p>
                <br />
                <p className="text-gray-600 font-medium">
                    Witnessing individuals come together to fulfill each other's needs on our platform is deeply fulfilling, reflecting our commitment to nurturing a sharing culture. SwapShop's positive influence extends beyond the digital realm, sparking real change in our communities. Our integration of innovative technology underscores our determination to create a greener future while embracing the power of collective action. We are humbled by the impact SwapShop has made and remain resolute in our pursuit of a more sustainable and connected world.
                </p>
            </div>
        </div>
    );
}