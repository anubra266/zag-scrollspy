import { normalizeProps, useMachine } from '@zag-js/react';
import { Moon, Sprout, Sun, Terminal } from 'lucide-react';
import { useId } from 'react';
import * as scrollspy from 'zag-scrollspy';
import Markdown from './components/markdown';
import { useTheme } from './hooks/use-theme';
import { cn } from './lib/utils';
import { sections } from './sections';

function App() {
  const [state, send] = useMachine(
    scrollspy.machine({
      id: useId(),
      items: sections.map((section) => section.id),
      offsetTop: 64
    })
  );

  const api = scrollspy.connect(state, send, normalizeProps);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className='min-h-screen bg-gradient-to-b from-primary-bg to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200'>
      <nav className='sticky top-0 bg-white py-4 px-20 border-gray-200 border-b dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm w-full z-50'>
        <div className='container-auto-md flex gap-4 items-center'>
          <Sprout className='w-6 h-6 text-primary dark:text-primary-light' />
          <a
            href='/'
            className='mr-auto font-bold text-xl text-gray-900 dark:text-white'
          >
            Zag Scrollspy
          </a>
          {sections.map((section) => (
            <a
              key={section.id}
              {...api.getItemProps({ id: section.id })}
              className={cn('nav-item', {
                active: api.activeId === section.id
              })}
            >
              {section.title}
            </a>
          ))}
          <button
            type='button'
            onClick={toggleDarkMode}
            className='p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors duration-200'
            aria-label='Toggle dark mode'
          >
            {darkMode ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>
        </div>
      </nav>

      <main>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={cn('py-16 px-20 container-auto-md')}
          >
            <div className='container space-y-6 px-24'>
              <div className='section-card'>
                <div className='flex items-center space-x-3 mb-6'>
                  <Terminal className='w-8 h-8 text-primary dark:text-primary-light' />
                  <h2 className='text-3xl font-bold text-gray-900 dark:text-white tracking-tight'>
                    {section.title}
                  </h2>
                </div>
                <div className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  <Markdown>{section.description}</Markdown>
                </div>
                {section.subSections && (
                  <SubSection sections={section.subSections} />
                )}
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className='py-20 px-20 text-center text-gray-500 text-lg tracking-widest'>
        <span>
          With ❤️ from{' '}
          <a
            target='_blank'
            href='https://anubra266.dev'
            rel='noreferrer'
            className='text-gray-500 hover:text-gray-600 border-b border-cyan-400'
          >
            @anubra266
          </a>
        </span>
        <div className='mt-4'>
          <a
            href='https://github.com/anubra266/zag-scrollspy/'
            target='_blank'
            rel='noreferrer'
            className='text-gray-500 hover:text-gray-600 border-b border-cyan-400 px-1'
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

function SubSection({
  sections
}: {
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
}) {
  const [state, send] = useMachine(
    scrollspy.machine({
      id: useId(),
      items: sections.map((section) => section.id),
      offsetTop: 120,
      offsetLeft: 20
    })
  );

  const api = scrollspy.connect(state, send, normalizeProps);
  return (
    <div className='mt-8'>
      <div className='flex overflow-x-auto gap-2 p-2.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg mb-8 sticky top-[84px] backdrop-blur-sm z-10'>
        {sections.map((section) => (
          <a
            key={section.id}
            className={cn('tab-button transition-all duration-200 shrink-0', {
              'active shadow-sm': api.activeId === section.id
            })}
            {...api.getItemProps({ id: section.id })}
          >
            {section.title}
          </a>
        ))}
      </div>
      <div className='flex overflow-x-auto gap-6 pb-4 -mx-4 px-4'>
        {sections.map((section) => (
          <section
            key={`${section.id}-content`}
            id={section.id}
            className='p-6 bg-white dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm min-w-[800px] transition-all duration-200'
          >
            <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
              {section.title}
            </h3>
            <div className='prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300'>
              <Markdown>{section.content}</Markdown>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
