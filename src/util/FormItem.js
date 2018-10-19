export default class FormItem {
  constructor(options = {}) {
    this.options = options
    this.rules = options.rules
    this.value = options.value || ''
    this.feedback = options.feedback || ''
  }

  validate(config) {
    const setFeedback = (config || {}).setFeedback
    const value = this.value
    this.rules.forEach(rule => {
      this.valid = rule.validator(value)
      if (setFeedback) {
        this.feedback = this.valid ? '' : rule.message
      }
    })
  }
}