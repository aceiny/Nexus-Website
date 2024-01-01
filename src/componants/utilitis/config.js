export default {
    globalStyles: {
        maxHeight: '300px', color: "red"
    }, commands: {
        echo: {
            description: 'Echoes a passed string.', usage: 'echo <string>', fn: function () {
                return `${Array.from(arguments).join(' ')}`
            }
        },

        slogan: {
            description: 'Prints out our clubs solgan.',
            usage: 'slogan',
            fn: (...args) => '<img src="/slogan.png" style="margin-top: 20px"  alt="slogan"/>'

        }, socials: {
            description: 'Prints out our socials.',
            usage: 'slogan',
            fn: (...args) => '<p style="color:#0038FF">Facebook: <a target="_blank" style=" color:white;text-decoration:underline" href="https://www.facebook.com/profile.php?id=61551649420493">https://www.facebook.com/profile.php?id=61551649420493</a></p> <p style="color:#FCAF45">Instagram: <a target="_blank" style="color:white;text-decoration:underline" href={"https://www.instagram.com/nexus.estin"}>https://www.instagram.com/nexus.estin/</a></p><p style="color:#4C7FC7">Linkedin: <a target="_blank" style="color:white;text-decoration:underline" href={"https://www.linkedin.com/company/nexus-security-club"}>https://www.linkedin.com/company/nexus-security-club</a></p><p>X: <a target="_blank" style="color:white;text-decoration:underline" href={"https://twitter.com/Nexus_Security1"}>https://twitter.com/Nexus_Security1</a></p>'

        },

    }, casingCommands: {
        CaSeMatTeRs: {
            description: 'In terminals with case-insensitive matching, this command can be executed regardless of whether the casing is correct.',
            fn: () => 'This command is called "CaSeMatTeRs", but in case-insensitive terminals it can also be called with "casematters"!'
        }
    }
}