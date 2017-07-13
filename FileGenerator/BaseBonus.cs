using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class BaseBonus
    {
        public DaocEnums.bonustype Type { get; set; }
        public int? Max { get; set; }
        public string Text { get; set; }
        public bool IsPvE { get; set; }
        public int? Value { get; set; }

        public BaseBonus(DaocEnums.bonustype type, int? max, string text, bool isPvE) {
            Type = type;
            Max = max;
            Text = text;
            IsPvE = isPvE;

        }
    }
}
