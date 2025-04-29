// Convert the following values to Boolean: 0, "0", "", "false", [], {}

console.log(!!0);
console.log(!!"0");
console.log(!!"");
console.log(!!"false");
console.log(Boolean([]));
console.log(!!{});

// | Value       | Boolean Equivalent | Why? |

// |-------------|--------------------|------|

// | `0`         | `false`            | `0` is a **falsy** number. |

// | `"0"`       | `true`             | Non-empty string → **truthy**. |

// | `""`        | `false`            | Empty string → **falsy**. |

// | `"false"`   | `true`             | It's a **non-empty string**, not the Boolean `false`. |

// | `[]`        | `true`             | Empty array is an **object** → **truthy**. |

// | `{}`        | `true`             | Empty object is also **truthy**. |

/**
 * false, 0, "", null, undefined, and NaN — everything else is truthy.
 */
