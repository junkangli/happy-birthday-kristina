window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);

            const text = document.createElement("a-text");
            const textScale = 100;
            text.setAttribute("look-at", "[gps-new-camera]");
            text.setAttribute("scale", {
                x: textScale,
                y: textScale,
                z: textScale
            });
            text.setAttribute("value", "HAPPY BIRTHDAY!");
            text.setAttribute("align", "center");
            text.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(text);
        }
        testEntityAdded = true;
    });
};