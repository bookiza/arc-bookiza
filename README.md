# Arc-Bookiza

Returns the ARC object to register Bookiza Client with, and connects it to the [Bubblin Superbook API](https://bubblin.io).

## Usage:

```
    import read from 'arc-bookiza'
    import os from 'os'

    /* Get to the root directory of the machine */
    const homeDir = os.homedir()
    const location = `${homeDir}/.bookizarc` 
    
    // const location = path.join(__dirname, '..', '.bookizarc');

    read(location)
        .then((data) => {
          // Do something with arc.rc values.
          ...
          ... 
          })
        .catch((err) => {
            // handle error.
          });
```