# How We Made PHP Typesafe

(sort of)

---

We all know that PHP is dynamically typed

```php
$foo = 1;
```

---

We know it's hard to guess types dynamically

```php
$foo = $_GET['foo_id'];
```

---

But we're suckers for punishment

---

## A C extension that wraps function calls...

```php
/**
* @return int
*/
function getFoo()
{
	return "foo";
}

```

---

## ... and enforces PHPDoc at runtime

```php
/**
* @return int
*/
function getFoo()
{
	return "foo";
}


// PHP Fatal error:  Wrong type encountered
// for return value of function getFoo
// was expecting a integer but
// got a (string) 'foo'

```


---

## ... and every function must have valid PHPDoc

```php
function getFoo()
{
	return "foo";
}


// PHP Fatal error:  Function annotation compil-
// ation failed for function getFoo in file
// foo.php at line 3, error message: No
// phpdoc specified
```

---

PHPDoc this uniform makes static analysis easy too.

---

```php

/** @return Foo|null */
function getFoo()
{
	if (rand() < 0.5)
		return null;
	return new Foo();
}

$fooInstance = getFoo();
$fooInstance->doIt();

// Warning: $fooInstance may be null at line 8

```

---

We're going to open source this work soon. Thanks!

@sentiental - Anthony

@jmarrama - Joe