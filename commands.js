// Fix: Define the content for 'whois', 'what', 'when', 'where' as arrays
const whois = [
    "Name: Onell Aquino",
    "Role: Web Developer",
    "Location: Earth"
];
const what = [
    "This is a portfolio website showcasing web development projects."
];
const when = [
    "This website was created in 2025."
];
const where = [
    "Hosted at onellwebsite.com"
];

const help = [
    "Available commands:",
    "help - Displays the list of available commands",
    "whois - Provides information about the user",
    "what - Provides information about the website",
    "when - Provides information about the website",
    "where - Provides information about the website",
    "clear - Clears the terminal screen",
    "admin - Access the admin panel"
];
const admin = [
    "Enter password to access the admin panel",
    "Password: "
];
let correctPassword = "admin123";  // Set the correct password for the admin panel
let adminMode = false;  // Set the initial state of the admin panel

// Fix: Add the function to process commands
function commander(cmd) {
    cmd = cmd.trim().toLowerCase();

    if (adminMode) {
        let pass1 = cmd.trim().toLowerCase();
        if (correctPassword === pass1) {
            addLine("Access granted", "success", 0);
        } else {
            addLine("Access denied", "error", 0);
        }
        adminMode = false;
        return;
    }

    switch (cmd) {
        case "help":
            loopLines(help, "help", 250);
            break;
        case "whois":
            loopLines(whois, "whois", 250);
            break;
        case "what":
            loopLines(what, "what", 250);
            break;
        case "when":
            loopLines(when, "when", 250);
            break;
        case "where":
            loopLines(where, "where", 250);
            break;
        case "admin":
            loopLines(admin, "admin", 250);
            adminMode = true;
            break;
        case "clear":
            terminal.innerHTML = "";  // Clear terminal content
            break;
        default:
            addLine("Command not found", "error", 0);  // Show error for unknown commands
            break;
    }
}
