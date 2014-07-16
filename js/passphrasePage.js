/**
 * Created by jrootham on 03/07/14.
 */

PassphrasePage = {}

PassphrasePage.store = function(data) {
    this.data = data
}

PassphrasePage.error = function(err) {
    console.log(err.message)
}

PassphrasePage.init = function() {
    var promise = PuffNet.getJSON("data/randomWords.json")
    promise.then(PassphrasePage.store, PassphrasePage.error)
}

PassphrasePage.init()
