class DataStorage {
  /**
   * @param {string} key
   * @param {string} value
   */
  setItem(key, value) {
    try {
      if (typeof value === "object") {
        window.localStorage.setItem(key, JSON.stringify(value));
      } else {
        window.localStorage.setItem(key, value);
      }
    } catch (error) {
      // could not save to localStorage (safari private browsing)
    }
  }

  /**
   * @param {string} key
   * @param {string} defaultValue
   * @return {string}
   */
  getString(key, defaultValue = "") {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    return value;
  }

  /**
   * @param {string} key
   * @param {boolean} defaultValue
   * @return {boolean}
   */
  getBoolean(key, defaultValue = false) {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    if (value === "true") {
      return true;
    } else if (value === "false") {
      return false;
    } else {
      return defaultValue;
    }
  }

  /**
   * @param {string} key
   * @param {number} defaultValue
   * @return {number}
   */
  getNumber(key, defaultValue = 0) {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    return Number.parseFloat(value, 10);
  }

  /**
   * @param {string} key
   * @param {array} defaultValue
   * @return {array}
   */
  getArray(key, defaultValue = []) {
    return this.getObject(key, defaultValue);
  }

  /**
   * @param {string} key
   * @param {object} defaultValue
   * @return {object}
   */
  getObject(key, defaultValue = {}) {
    let value = window.localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    try {
      return JSON.parse(value);
    } catch {
      return defaultValue;
    }
  }

  /**
   * @param {string} key
   */
  delete(key) {
    window.localStorage.removeItem(key);
  }
}

export default new DataStorage();
