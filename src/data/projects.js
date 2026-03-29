const projects = [
  {
    id: 1,
    title: 'Dev Finance',
    description:
      'Aplicação de controle financeiro pessoal com dashboard de receitas e despesas, filtros por período e exportação de relatórios em CSV.',
    techs: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/arthurzica/dev-finance',
    demo: 'https://dev-finance.vercel.app',
    image: null,
  },
  {
    id: 2,
    title: 'Task Board',
    description:
      'Kanban board colaborativo em tempo real com drag-and-drop, autenticação por OAuth e notificações via WebSocket.',
    techs: ['React', 'TypeScript', 'Socket.io', 'Prisma'],
    github: 'https://github.com/arthurzica/task-board',
    demo: 'https://task-board.vercel.app',
    image: null,
  },
  {
    id: 3,
    title: 'CLI Boilerplate',
    description:
      'Ferramenta de linha de comando para gerar boilerplates de projetos Node.js com configurações de ESLint, Prettier e Docker prontas.',
    techs: ['Node.js', 'Commander.js', 'Inquirer', 'Shell'],
    github: 'https://github.com/arthurzica/cli-boilerplate',
    demo: null,
  },
]

export default projects
