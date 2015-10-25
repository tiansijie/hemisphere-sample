# hemisphere-sample
Hemisphere Sampling(uniform and cosinus) using hammersley point set

## Install
```npm install hemisphere-sample```

## Usage
```javascript
import {hemisphereSampleUniform, hemisphereSampleCos} from "hemisphere-sample";

for(let i = 0; i < 256; ++i) {
	const uniform = hemisphereSampleUniform(i, 256);
	const cos = hemisphereSampleCos(i, 256);
	// result is an array
	// [v1, v2, v3]
}
```

## See also
http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html

## License
MIT
