import simpleTheme from "themes/simple";

const config = {
  // global site information configuration
  site: {
    name: "ロッグタル", // site name
    title: "ロッグタル。", // site title
    description: "ギークなブログ。", // site description
    slogan: ["食べる", "コードする", "眠る"], // slogans
    owner: "ロッグタル　テーム", // site owner, used in footer copyright
  },
  // post configuration
  post: {
    folder: "posts", // post storage folder
    title: "ポスツ", // post title (displayed on the index page and on the posts page)
    description: "私のブログポスツ", // post description (displayed only on the posts page)
    indexDescription: "ポスツページでより多いポスツを読んでください。", // post description (displayed only on the index page)
    readMore: "より多い読み", // read more text on the index page
    postsToDisplay: 6, // number of posts to display on the index page
    noPostText: "ポスツがありません。", // text to display when no posts exist for the current section
  },
  // tag configuration
  tags: {
    // {{tag}} is the template string format in LogTure used to inject variables into the current string template
    description: "ポストは{{tag}}とタッグしました。", // tag description (displayed only on the tag page)
    title: "{{tag}}タッグ", // tag title (displayed on the tag page)
    // configuration for the `all tags` page
    allTags: {
      title: "タッグ", // title (displayed on the all tags page)
      description: "すべてタッグ", // description (displayed only on the all tags page)
      postCount: "ポスツが{{count}}つ", // post count description (displayed on the all tags page)
    },
  },
  // navbar links configuration
  links: [
    {
      text: "ホーム", // link text
      link: "/", // link url
    },
    {
      text: "ポスツ",
      link: "/posts",
    },
    {
      text: "タッグ",
      link: "/tags",
    },
    {
      text: "プロジェクト",
      link: "/sections/projects",
    },
    {
      text: "ギットハブ",
      link: "https://github.com/samzhangjy/logture",
    },
  ],
  // custom sections configuration
  custom: [
    {
      // section data, can be either an array of objects
      // or a string (see the `Join us` section below)
      data: [
        // if data is an array, then each object in the array
        // represents a card with certain information
        {
          title: "Project", // card title
          // card description
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "https://avatars.dicebear.com/api/miniavs/weilai.svg", // card cover, shown on the left of card description
          link: "/", // the link to navigate to when clicking on the card
        },
        {
          title: "Project",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "https://avatars.dicebear.com/api/miniavs/weilai.svg",
          link: "/",
        },
        {
          title: "Project",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "https://avatars.dicebear.com/api/miniavs/weilai.svg",
          link: "/",
        },
        {
          title: "Project",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "https://avatars.dicebear.com/api/miniavs/weilai.svg",
          link: "/",
        },
      ],
      name: "Projects", // section name (title)
      description: "A list of projects", // section description
      slug: "projects", // section slug, needed if the creation of a new page containing only this section is needed
      newPage: true, // weather to create a single page under `/sections/[slug]` or not
      showOnIndex: false, // weather to show the current section on the index page or not
    },
    {
      data: [
        {
          title: "工藤　新一",
          description:
            "おはようごます。今回、私たちはこの人が知るものが必要です。化学は一番良いです。そして、毒物を食べましょう！へぇ、知らないね！くそ、ばかやろう！",
          cover: "https://avatars.dicebear.com/api/miniavs/gfwl.svg",
          link: "/",
        },
        {
          title: "工藤　新一",
          description:
            "おはようごます。今回、私たちはこの人が知るものが必要です。化学は一番良いです。そして、毒物を食べましょう！へぇ、知らないね！くそ、ばかやろう！",
          cover: "https://avatars.dicebear.com/api/miniavs/gfwl.svg",
          link: "/",
        },
        {
          title: "安倍　晋三",
          description:
            "えっ？あなたは、「安倍晋三とは何」が知るものが欲しいですか。あっ、私はあなたに言いましょう。安倍晋三は、馬鹿野郎です！",
          cover: "https://avatars.dicebear.com/api/miniavs/gfwl.svg",
          link: "/",
        },
        {
          title: "工藤　新一",
          description:
            "おはようごます。今回、私たちはこの人が知るものが必要です。化学は一番良いです。そして、毒物を食べましょう！へぇ、知らないね！くそ、ばかやろう！",
          cover: "https://avatars.dicebear.com/api/miniavs/gfwl.svg",
          link: "/",
        },
      ],
      name: "メンバー",
      description: "メンバーのリストだ",
      slug: "members",
      newPage: false,
    },
    // section data can also be a string, in which case it will be used as the main content of the section
    {
      data: `こんにちは。これはロッグタルテームです。まず、あなたはTNTがありますか。そして、「/」を入力してください。あっ、これはMinecraftじゃないか！あぁあ、すみません、違い世界へ行きました。
  リップサムが知りますか。はい、これは日本語のリップサムです。ここの内容を理解しようとしないでください。分かりますか？あなたは分かりましたと欲しいです。自殺。あああ。あああああ。`,
      name: "Join us",
      description: "Join us",
      slug: "join-us",
      newPage: false,
    },
  ],
  showPoweredBy: true, // change it to false if you want to hide the `Powered by LogTure` text and remove the console.log message
  footer: `
    Made with ❤️ by 
    <a href="https://github.com/samzhangjy" rel="noreferrer" target="_blank">
      samzhangjy
    </a>.
  `, // extra footer content, can include HTML tags
  theme: simpleTheme, // theme config
};

export default config;
