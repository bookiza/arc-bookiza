# Arc-Bookiza

Returns the ARC object to register Bookiza Client and connect it with the Bubblin Superbook API.

## Usage:

```
    const arc = require('arc-bookiza');

    let location = path.join(__dirname, '..', '.bookizarc');

    arc.read(location)
        .then((data) => {
          // Do something with arc.rc values.
          ...
          ... 
          })
        .catch((err) => {
            // handle error.
          });
```