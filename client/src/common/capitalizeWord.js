export default function capitalizeWord(word) {
  switch (typeof word) {
    case "string":
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

    case "boolean":
      const booleanToString = word.toString();
      return `${booleanToString.charAt(0).toUpperCase()}${booleanToString.slice(1)}`;
    
    default:
      return word;
  }
};