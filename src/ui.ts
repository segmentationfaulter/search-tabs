import { html } from 'lit-html'

type SubmitHandler = (event: Event) => void
type InputChangeHandler = (event: InputEvent) => void

const tabItem = (tab: chrome.tabs.Tab, isSelected: boolean) => html`
  <li class=${isSelected ? 'selected-tab' : ''}>
    <div>${tab.title}</div>
    <div>${tab.url}</div>
  </li>
`

export function openTabsList(tabs: chrome.tabs.Tab[], submitHandler: SubmitHandler, inputChangeHandler: InputChangeHandler) {
  const searchField = html`
  <form @submit=${submitHandler}>
    <input type="search" placeholder="Type your search query" ?autofocus=${true} @input=${inputChangeHandler} />
  </form>
  `

  return html`
    <div>
      ${searchField}
      <ul>
        ${tabs.map((tab, index) => tabItem(tab, index === 0))}
      </ul>
    </div>
  `
}
