import StorageIcon from '@material-ui/icons/Storage';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import SettingsIcon from '@material-ui/icons/Settings';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TranslateIcon from '@material-ui/icons/Translate';
import BuildIcon from '@material-ui/icons/Build';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import {
    mdiLanguageJava, mdiNodejs, mdiLanguagePython, mdiLanguagePhp, mdiGraphql,

    mdiReact, mdiVuejs, mdiLanguageJavascript, mdiLanguageTypescript, mdiSass,
    mdiLanguageCss3, mdiLanguageHtml5, mdiJquery,

    mdiElectronFramework,

    mdiDatabase, mdiFirebase,

    mdiLanguageCsharp, mdiLanguageR,

    mdiGit, mdiGithub, mdiGitlab, mdiJira, mdiBookMultiple, mdiRobotAngry, mdiGamepadVariantOutline, mdiDocker
} from '@mdi/js';

export const skills = [
    {
        title: 'Frontend',
        IconTagName: FlipToFrontIcon,
        techs: [
            {
                techName: 'ReactJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI, Certified By Udemy (40hrs)',
                techIcon: mdiReact,
                techIconTitle: 'ReactJS'
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Vuex, NuxtJS, Vuetify, Certified By Udemy (30hrs)',
                techIcon: mdiVuejs,
                techIconTitle: 'VueJS'
            },
            {
                techName: 'Typescript - ',
                techDesc: 'Generics, Interfaces, Unions, Certified By Udemy (20hrs)',
                techIcon: mdiLanguageTypescript,
                techIconTitle: 'Typescript'
            },
            {
                techName: 'Javascript - ',
                techDesc: 'ES6, ES7, Fetch API, Ajax, ...',
                techIcon: mdiLanguageJavascript,
                techIconTitle: 'Javascript'
            },
            {
                techName: 'jQuery',
                techDesc: '',
                techIcon: mdiJquery,
                techIconTitle: 'jQuery',
            },
            {
                techName: 'Sass',
                techDesc: '',
                techIcon: mdiSass,
                techIconTitle: 'Sass',
            },
            {
                techName: 'CSS - ',
                techDesc: 'BEM, Mobile First, Grid, Flexbox',
                techIcon: mdiLanguageCss3,
                techIconTitle: 'CSS',
            },
            {
                techName: 'HTML',
                techDesc: '',
                techIcon: mdiLanguageHtml5,
                techIconTitle: 'HTML',
            },
        ]
    },
    {
        title: 'Backend',
        IconTagName: SettingsIcon,
        techs: [
            {
                techName: 'Java - ',
                techDesc: 'Spring MVC, Maven, Thymeleaf, JUnit, Mockito, Selenium',
                techIcon: mdiLanguageJava,
                techIconTitle: 'Java'
            },
            {
                techName: 'NodeJS - ',
                techDesc: 'ExpressJS, Typescript, Sequelize, Mongoose, Pug, EJS, Handlebars',
                techIcon: mdiNodejs,
                techIconTitle: 'NodeJS',
            },
            {
                techName: 'Python - ',
                techDesc: 'Django, PythonLDAP',
                techIcon: mdiLanguagePython,
                techIconTitle: 'Python',
            },
            {
                techName: 'PHP',
                techDesc: '',
                techIcon: mdiLanguagePhp,
                techIconTitle: 'PHP'
            },
            {
                techName: 'Firebase - ',
                techDesc: 'Google BaaS (Backend as a Service)',
                techIcon: mdiFirebase,
                techIconTitle: 'Firebase'
            },
            {
                techName: 'GraphQL - ',
                techDesc: 'Query Language for APIs',
                techIcon: mdiGraphql,
                techIconTitle: 'GraphQL'
            }
        ]
    },
    {
        title: 'Desktop Apps',
        IconTagName: DesktopWindowsIcon,
        techs: [
            {
                techName: 'ElectronJS - ',
                techDesc: 'Cross Plattform Desktop Applications (MacOS, Windows, Linux)',
                techIcon: mdiElectronFramework,
                techIconTitle: 'ElectronJS'
            },
        ]
    },
    {
        title: 'Mobile Apps',
        IconTagName: PhoneAndroidIcon,
        techs: [
            {
                techName: 'React Native - ',
                techDesc: 'In Learning Progress, Cross Plattform Mobile Applications (Android, iOS)',
                techIcon: mdiReact,
                techIconTitle: 'React Native'
            },
        ]
    },
    {
        title: 'Database',
        IconTagName: StorageIcon,
        techs: [
            {
                techName: 'MongoDB (NoSQL) - ',
                techDesc: 'Atlas, Compass',
                techIcon: mdiDatabase,
                techIconTitle: 'MongoDB'
            },
            {
                techName: 'Firebase (NoSQL) - ',
                techDesc: 'Google Service BaaS ',
                techIcon: mdiDatabase,
                techIconTitle: 'Firebase'
            },
            {
                techName: 'MySQL - ',
                techDesc: 'PhpMyAdmin',
                techIcon: mdiDatabase,
                techIconTitle: 'MySQL'
            },
            {
                techName: 'MS-SQL',
                techDesc: '',
                techIcon: mdiDatabase,
                techIconTitle: 'MS-SQL'
            },
        ]
    },
    {
        title: 'Software Testing',
        IconTagName: AssignmentTurnedInOutlinedIcon,
        techs: [
            {
                techName: 'Java - ',
                techDesc: 'Unit Testing (JUnit) ,Integration Testing (Mockito), Black-box testing (Selenium)',
                techIcon: mdiLanguageJava,
                techIconTitle: 'Java'
            },
            {
                techName: 'JavaScript - ',
                techDesc: 'Puppeteer, Jest',
                techIcon: mdiLanguageJavascript,
                techIconTitle: 'Java'
            },
            {
                techName: 'Python - ',
                techDesc: 'Django Web App Testing',
                techIcon: mdiLanguagePython,
                techIconTitle: 'Python'
            },
        ]
    },
    {
        title: 'Other Languages',
        IconTagName: TranslateIcon,
        techs: [
            {
                techName: 'CSharp',
                techDesc: '',
                techIcon: mdiLanguageCsharp,
                techIconTitle: 'CSharp'
            },
            {
                techName: 'R',
                techDesc: '',
                techIcon: mdiLanguageR,
                techIconTitle: 'R'
            },
            {
                techName: 'Assembly 6502 - ',
                techDesc: 'Great language to dive into the machine for the nerds!',
                techIcon: mdiGamepadVariantOutline,
                techIconTitle: 'Assembly 6502'
            },
        ]
    },
    {
        title: 'Tools',
        IconTagName: BuildIcon,
        techs: [
            {
                techName: 'Docker - ',
                techDesc: 'makes the life a lot easier!',
                techIcon: mdiDocker
            },
            {
                techName: 'Jira - ',
                techDesc: 'Ticket System used for business projects, Kanban and Scrum.',
                techIcon: mdiJira
            },
            {
                techName: 'Github - ',
                techDesc: 'For business and personal projects.',
                techIcon: mdiGithub,
                techIconTitle: 'Github'
            },
            {
                techName: 'GitLab - ',
                techDesc: 'used for business projects.',
                techIcon: mdiGitlab,
                techIconTitle: 'GitLab'
            },
            {
                techName: 'Git - ',
                techDesc: 'daily use.',
                techIcon: mdiGit,
                techIconTitle: 'Git'
            },
        ]
    },
    {
        title: 'Others',
        IconTagName: AddCircleOutlineIcon,
        techs: [
            {
                techName: 'Machine Learning - ',
                techDesc: '(R, Python) Data Cleaning, Linear Regression.',
                techIcon: mdiRobotAngry
            },
            {
                techName: 'OS & Co. - ',
                techDesc: 'Linux Debian, MacOS X, Windows 10, Bash, Terminal (Bash), LDAP, Assembly 6502.',
                techIcon: mdiBookMultiple,
                techIconTitle: 'others'
            },
        ]
    },
];
