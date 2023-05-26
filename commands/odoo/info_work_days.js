const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info_horas')
        .setDescription('Información de horas que debes trabajar'),
    async execute(interaction) {
        await interaction.reply(`
        \t\t\tTabla de horas de trabajo
--------------------------------------
| De lunes a Jueves: 8 horas\t\t\t\t|
| Viernes: 5 horas\t\t\t\t\t\t\t\t\t|
| Total Semanal:  37 horas\t\t\t\t\t|
--------------------------------------
| Si hay algún día festivo de \t\t\t\t|
| lunes a jueves.   \t\t\t\t\t\t\t\t\t|
| Total de horas: 29 horas \t\t\t\t\t|
--------------------------------------
| Si hay más de un día festivo de\t\t|
| lunes a viernes. \t\t\t\t\t\t\t\t\t|
| Total de horas (2 días):21 horas\t\t|
| Total de horas (3 días):13 horas\t\t|
| Total de horas (4 días):5 horas\t\t|
--------------------------------------
| Si hay un día festivo y además\t\t|
| también el día viernes.\t\t\t\t\t\t|
| Total de horas (1 día): 24 horas\t|
| Total de horas (2 días):16 horas\t|
| Total de horas (3 días):8 horas\t\t|
--------------------------------------
      `);
    }
}
