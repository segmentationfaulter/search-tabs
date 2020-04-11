import { html } from 'lit-html'

type SubmitHandler = (event: Event) => void
type InputChangeHandler = (event: InputEvent) => void

const searchField = (submitHandler: SubmitHandler, inputChangeHandler: InputChangeHandler) => html`
  <form @submit=${submitHandler}>
    <input type="search" placeholder="Type your search query" ?autofocus=${true} @input=${inputChangeHandler} />
  </form>
`

const tabItem = (tab: chrome.tabs.Tab) => html`
  <li>
    <div>${tab.title}</div>
    <div>${tab.url}</div>
  </li>
`

export const openTabsList = (tabs: chrome.tabs.Tab[], submitHandler: SubmitHandler, inputChangeHandler: InputChangeHandler) => html`
  <div>
    ${searchField(submitHandler, inputChangeHandler)}
    <ul>
      ${tabs.map(tab => tabItem(tab))}
    </ul>
  </div>
  
`
