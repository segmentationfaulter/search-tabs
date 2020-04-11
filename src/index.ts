import { render } from 'lit-html'

import { openTabsList } from './ui'

chrome.tabs.query({}, function(tabs: chrome.tabs.Tab[]) {
  render(openTabsList(tabs, submitHandler, inputChangeHandler), document.body)

  function submitHandler(event: Event) {
    console.log(event)
  }

  function inputChangeHandler(event: InputEvent) {
    const { value } = event.target as HTMLInputElement
    const filterdTabs = tabs.filter(tab => tab.title?.includes(value) || tab.url?.includes(value))
    render(openTabsList(filterdTabs, submitHandler, inputChangeHandler), document.body)
  }
})
