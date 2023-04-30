export default defineAppConfig({
  docus: {
    title: 'Obsidian Wiki', 
    description: 'Wiki for the mod Obsidian',
    url: 'https://oliviathevampire.github.io/obsidian-wiki/',
    socials: {
      discord: {
        label: 'Discord',
        icon: 'simple-icons:discord',
        href: 'https://discord.gg/63hmSTxyDA'
      },
      twitter: '@oliviathevampyr',
      github: 'oliviathevampire/obsidian-wiki',
    },
    github: {
      dir: 'content',
      edit: true,
      branch: 'main',
      contributors: true,
      repo: 'obsidian-wiki',
      owner: 'oliviathevampire',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      fluid: true,
    },
    footer: {
      credits: false,
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
