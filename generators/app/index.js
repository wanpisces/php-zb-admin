const Generator = require('yeoman-generator');



module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ])
            .then(answers => {
                this.answers = answers
            })
    }

    writing() {
        // 把每一个文件都通过模板转换到目标路径

        const templates = [
            '.browserslistrc',
            '.editorconfig',
            '.eslintrc.js',
            '.gitignore',
            '.postcssrc.js',
            'babel.config.js',
            'package-lock.json',
            'package.json',
            'public/cdn/animate/3.5.2/animate.css',
            'public/cdn/avue/avue.css',
            'public/cdn/store/1.3.20/store.js',
            'public/favicon.ico',
            'public/index.html',
            'public/svg/loading-spin.svg',
            'public/ukey/certLogin.js',
            'public/ukey/checkUkey.js',
            'public/ukey/topEsa.min.efde3647.js',
            'public/ukey/TopEsa.zip',
            'README.md',
            'src/api/admin/agency.js',
            'src/api/admin/agency_user.js',
            'src/api/admin/announcement.js',
            'src/api/admin/client.js',
            'src/api/admin/contract.js',
            'src/api/admin/dept.js',
            'src/api/admin/dict.js',
            'src/api/admin/log.js',
            'src/api/admin/menu.js',
            'src/api/admin/protocol.js',
            'src/api/admin/role.js',
            'src/api/admin/room.js',
            'src/api/admin/sysconfig.js',
            'src/api/admin/template/contract.js',
            'src/api/admin/template/notice.js',
            'src/api/admin/token.js',
            'src/api/admin/user.js',
            'src/api/apply/rent.js',
            'src/api/common.js',
            'src/api/gen/form.js',
            'src/api/gen/gen.js',
            'src/api/listings/house.js',
            'src/api/listings/onlineHouse.js',
            'src/api/listings/person.js',
            'src/api/listings/project.js',
            'src/api/listings/reconsider.js',
            'src/api/login.js',
            'src/App.vue',
            'src/components/avue-plugin-ueditor/node_modules/axios/CHANGELOG.md',
            'src/components/avue-plugin-ueditor/node_modules/axios/dist/axios.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/dist/axios.map',
            'src/components/avue-plugin-ueditor/node_modules/axios/dist/axios.min.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/dist/axios.min.map',
            'src/components/avue-plugin-ueditor/node_modules/axios/index.d.ts',
            'src/components/avue-plugin-ueditor/node_modules/axios/index.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/adapters/http.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/adapters/README.md',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/adapters/xhr.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/axios.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/cancel/Cancel.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/cancel/CancelToken.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/cancel/isCancel.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/Axios.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/createError.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/dispatchRequest.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/enhanceError.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/InterceptorManager.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/README.md',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/settle.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/core/transformData.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/defaults.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/bind.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/buildURL.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/combineURLs.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/cookies.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/deprecatedMethod.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/isAbsoluteURL.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/isURLSameOrigin.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/normalizeHeaderName.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/parseHeaders.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/README.md',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/helpers/spread.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/lib/utils.js',
            'src/components/avue-plugin-ueditor/node_modules/axios/LICENSE',
            'src/components/avue-plugin-ueditor/node_modules/axios/package.json',
            'src/components/avue-plugin-ueditor/node_modules/axios/README.md',
            'src/components/avue-plugin-ueditor/node_modules/axios/UPGRADE_GUIDE.md',
            'src/components/avue-plugin-ueditor/package.json',
            'src/components/avue-plugin-ueditor/packages/demo/demo.png',
            'src/components/avue-plugin-ueditor/packages/index.js',
            'src/components/avue-plugin-ueditor/packages/theme-chack/src/common.scss',
            'src/components/avue-plugin-ueditor/packages/theme-chack/src/crud-quill/quill.bubble.scss',
            'src/components/avue-plugin-ueditor/packages/theme-chack/src/crud-quill/quill.core.scss',
            'src/components/avue-plugin-ueditor/packages/theme-chack/src/crud-quill/quill.snow.scss',
            'src/components/avue-plugin-ueditor/packages/theme-chack/src/index.scss',
            'src/components/avue-plugin-ueditor/packages/theme-chack/src/ueditor.scss',
            'src/components/avue-plugin-ueditor/packages/ueditor/images/upload-hover.png',
            'src/components/avue-plugin-ueditor/packages/ueditor/images/upload-icon.png',
            'src/components/avue-plugin-ueditor/packages/ueditor/index.js',
            'src/components/avue-plugin-ueditor/packages/ueditor/src/main.vue',
            'src/components/avue-plugin-ueditor/packages/ueditor/src/upload/ali.js',
        ]

        templates.forEach(item => {
            // item => 每个文件路径
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}