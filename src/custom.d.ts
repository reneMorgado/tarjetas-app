/**
 * Declaración de módulo para archivos con extensión `.svg`.
 * 
 * Esto permite que los archivos SVG sean importados como módulos en un proyecto TypeScript.
 * La importación de un archivo SVG se considerará como una cadena de texto que representa la URL o la ruta del archivo.
 * 
 * Ejemplo de uso:
 * ```typescript
 * import logo from './logo.svg';
 * ```
 * En este ejemplo, `logo` será una cadena que representa la URL del archivo `logo.svg`.
 */
declare module '*.svg' {
    /**
     * El valor exportado por el módulo es una cadena de texto (`string`).
     * Esta cadena típicamente representa la ruta o URL del archivo SVG después de que ha sido procesado.
     */
    const value: string;

    /**
     * Exporta el valor como la exportación predeterminada del módulo.
     * Esto permite la importación simple del archivo SVG en otros archivos TypeScript.
     */
    export default value;
}

/**
 * Declaración de módulo para archivos con extensión `.png`.
 * 
 * Esto permite que los archivos PNG sean importados como módulos en un proyecto TypeScript.
 * La importación de un archivo PNG se considerará como una cadena de texto que representa la URL o la ruta del archivo.
 * 
 * Ejemplo de uso:
 * ```typescript
 * import image from './image.png';
 * ```
 * En este ejemplo, `image` será una cadena que representa la URL del archivo `image.png`.
 */
declare module '*.png' {
    /**
     * El valor exportado por el módulo es una cadena de texto (`string`).
     * Esta cadena típicamente representa la ruta o URL del archivo PNG después de que ha sido procesado.
     */
    const value: string;

    /**
     * Exporta el valor como la exportación predeterminada del módulo.
     * Esto permite la importación simple del archivo PNG en otros archivos TypeScript.
     */
    export default value;
}
