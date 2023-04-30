export default defineAppConfig({
  docus: {
    title: 'Obsidian Wiki', 
    description: 'Wiki for the mod Obsidian',
    url: 'http://docus.dev',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
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
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
