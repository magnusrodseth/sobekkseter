const windSpeedToDescription = (speed: number) => {
    if (speed >= 0 && speed < 0.3) {
        return "Stille";
    }

    if (speed >= 0.3 && speed < 1.6) {
        return "Flau vind";
    }

    if (speed >= 1.6 && speed < 3.4) {
        return "Svak vind";
    }

    if (speed >= 3.4 && speed < 5.5) {
        return "Lett bris";
    }

    if (speed >= 5.5 && speed < 8.0) {
        return "Laber bris";
    }

    if (speed >= 8.0 && speed < 10.8) {
        return "Frisk bris";
    }

    if (speed >= 10.8 && speed < 13.9) {
        return "Liten kuling";
    }

    if (speed >= 13.9 && speed < 17.2) {
        return "Stiv kuling";
    }

    if (speed >= 17.2 && speed < 20.8) {
        return "Sterk kuling";
    }

    if (speed >= 20.8 && speed < 24.5) {
        return "Liten storm";
    }

    if (speed >= 24.5 && speed < 28.5) {
        return "Full storm";
    }

    if (speed >= 28.5 && speed < 32.7) {
        return "Sterk storm";
    }

    if (speed >= 32.7) {
        return "Orkan";
    }
}

export default windSpeedToDescription;