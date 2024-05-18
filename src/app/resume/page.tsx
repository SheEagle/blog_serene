import Link from 'next/link'

import { IconX } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { type Metadata, type Viewport } from 'next'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'

export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#282935' },
    { media: '(prefers-color-scheme: dark)', color: '#282935' },
  ],
  colorScheme: 'dark',
}

export default function Page() {
  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-[65ch] flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>
            zhangyu@MacBook-Air:~
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>
            Last login: {dayjs().format('ddd MMM DD HH:mm:ss')} on ttys003
          </p>
          <Typed>
            <TypedText>whoami</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;m <strong>Serene Wang</strong>, in Chinese my name is{' '}
                <strong>王希如</strong>.
              </p>
              <p>
                I am a back-end engineer who have been involving in front-end
                development since <strong>2018</strong>, focusing on building
                aesthetically pleasing and highly interactive user interfaces by{' '}
                <code>React</code>.
              </p>
              <p>
                I have amassed substantial practical experience in the{' '}
                <code>React</code> technology stack.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                <span>opensource</span>
                <span>projects</span>
                <span>blog-info</span>
                <span>experience</span>
                <span>skills</span>
                <span>contact</span>
              </div>
            </TypedContent>
            <TypedText afterDelay={700}>opensource</TypedText>
            <TypedContent>
              <p>
                I am passionate about contributing to the open-source community,
                having made multiple contributions to well-known projects such
                as <code>Ant Design</code>.
              </p>
              <p>
                Additionally, I have developed and maintained lots of
                open-source projects, which have been successfully published on
                npm and collectively garnered nearly <i>20,000</i> downloads.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>projects</TypedText>
            <TypedContent>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/SheEagle/Ultraviolet'>
                      Ultraviolet
                    </a>
                  </strong>
                </li>
                <li>A Forum built for women in STEM.</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/SheEagle/web-monitor'>
                      Web Monitor
                    </a>
                  </strong>
                </li>
                <li>Monitor and manage runtime servers.</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/SheEagle/MyGenius'>My Genius</a>
                  </strong>
                </li>
                <li>A Chatbot</li>
              </ul>
            </TypedContent>
            <TypedText>blog-info</TypedText>
            <TypedContent>
              <p>
                I am keen on sharing knowledge as well as writing articles and
                tutorials regularly, covering <code>Java</code>,
                <code>Python</code>, <code>React</code>,
                <code>Machine Learning</code>, and Music.
              </p>
              <p>
                Previously, I primarily wrote in Chinese, but currently, my goal
                is to write articles in English.
              </p>
            </TypedContent>
            <TypedText>experience</TypedText>
            <TypedContent>
              <p>Until now, I have worked for two companies only.</p>
              <p>
                The first company focused on developing high-performance and
                versatile dialing systems and management platforms for internal
                enterprise use, along with various mini-programs and Apps.
              </p>
              <p>
                The second company specialized in creating visually appealing
                and high-performance e-commerce platforms and Apps for
                cross-border trade.
              </p>
            </TypedContent>
            <TypedText>skills</TypedText>
            <TypedContent>
              <p>
                I excel in <code>Java</code> and <code>Python</code>,
                proficiently utilizing <code>SpringBoot</code>,{' '}
                <code>Django</code> and <code>Flask</code>
                to develop web apps.
              </p>
              <p>
                I have a deep understanding of <code>React</code> and have
                explored other popular frameworks as well. Currently, my work
                primarily involves using <code>Next.js</code>, and I have
                extensive experience with <code>App Router</code>.
              </p>
              <p>
                In addition to back-end development, I am also familiar with
                front-end development using tools such as <code>React</code> and
                <code>Vue.js</code>.
              </p>
              <p>
                Furthermore, I have experience in mobile App development using
                <code>React Native</code> and <code>SwiftUI</code>.
              </p>
            </TypedContent>
            <TypedText>Contact</TypedText>
            <TypedContent>
              <div className='my-4 flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Social</p>
                <div className='grid flex-1 grid-cols-2 justify-items-start gap-2'>
                  <a href='https://github.com/SheEagle'>Github</a>
                  <a href='https://www.linkedin.com/in/xiru-wang-551103248/'>
                    Linkedin
                  </a>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Email</p>
                <a href='mailto:morganwang68@gmail.com'>
                  morganwang68@gmail.com
                </a>
              </div>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}
